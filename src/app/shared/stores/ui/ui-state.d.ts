interface UIState {
  tabsActive: { [key: string]: number | null };
  toggles: { [key: string]: any | null };
  formData: Record<string, any>;
  path: { path: string; formProps: string[] | null }[];
  pageCounter: number;
}
