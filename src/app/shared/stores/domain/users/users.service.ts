import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError, take } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { applyTransaction, EntityState, EntityStore, QueryEntity, StoreConfig } from '@datorama/akita';

/** Configuration */
interface StoreState extends EntityState<Models.User> {}
const url = '//jsonplaceholder.typicode.com/users'; // environment.endpoints.apiUrl +
const uniqueId = 'id';

/** Store */
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'users', idKey: uniqueId, resettable: true }) // , cache: { ttl: null }
export class UsersStore extends EntityStore<StoreState, Models.User> {
  constructor() {
    super({ modifying: false, loading: false });
  }
}

/** Query */
// tslint:disable-next-line:max-classes-per-file
@Injectable({ providedIn: 'root' })
export class UsersQuery extends QueryEntity<StoreState, Models.User> {
  public users$ = this.select();

  constructor(protected store: UsersStore) {
    super(store);
  }
}

/** Service */
// tslint:disable-next-line:max-classes-per-file
@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(
    public store: UsersStore,
    private query: UsersQuery,
    private http: HttpClient,
  ) {}

  public users$ = this.query.select();

  /**
   * Get entities and load into store
   * By default requests are cached
   * @param refreshCache Refresh entity data in cache, if false returns data currently in store
   */
  public get(refreshCache = false) {
    // If not cached or refresh cache is specified, make http call and load store
    if (refreshCache || !this.query.getHasCache()) {
      this.store.setLoading(true);
      return this.http.get<Models.User[]>(url).pipe(
        tap(entities =>
          this.store.set([...entities, ...entities, ...entities]),
        ), // On success, add response to store
        catchError(err => {
          applyTransaction(() => {
            this.store.setError(err);
            this.store.setLoading(false);
          });
          return throwError(err);
        }),
      );
    }
    // Always return original api response but only once
    return this.query.selectAll().pipe(take(1));
  }

  /**
   * Create new entity
   * @param entity
   */
  public post(entity: Models.User) {
    applyTransaction(() => {
      this.store.update({ modifying: true });
      this.store.setError(null);
    });
    return this.http.post<Models.User>(url, entity).pipe(
      tap(res => {
        applyTransaction(() => {
          this.store.add(res || entity); // If no response, add entity from argument
          this.store.update({ modifying: false });
        });
      }),
      catchError(err => {
        applyTransaction(() => {
          this.store.setError(err);
          this.store.update({ modifying: false });
        });
        return throwError(err);
      }),
    );
  }

  /**
   * Create new entity
   * @param entity
   */
  public put(entity: Models.User) {
    applyTransaction(() => {
      this.store.update({ modifying: true });
      this.store.setError(null);
    });
    return this.http
      .put<Models.User>(url + '/' + entity[uniqueId], entity)
      .pipe(
        tap(res => {
          applyTransaction(() => {
            this.store.update(entity[uniqueId], res || entity); // If no response, add entity from argument
            this.store.update({ modifying: false });
          });
        }),
        catchError(err => {
          applyTransaction(() => {
            this.store.setError(err);
            this.store.update({ modifying: false });
          });
          return throwError(err);
        }),
      );
  }

  /**
   * Delete entity
   * @param entity
   */
  public delete(entity: Models.User) {
    applyTransaction(() => {
      this.store.update({ modifying: true });
      this.store.setError(null);
    });
    return this.http.delete<Models.User>(url + '/' + entity[uniqueId]).pipe(
      tap(() => {
        applyTransaction(() => {
          this.store.remove(entity[uniqueId]);
          this.store.update({ modifying: false });
        });
      }),
      catchError(err => {
        applyTransaction(() => {
          this.store.setError(err);
          this.store.update({ modifying: false });
        });
        return throwError(err);
      }),
    );
  }

  /**
   * Reset store
   */
  public reset() {
    this.store.reset();
  }
}
