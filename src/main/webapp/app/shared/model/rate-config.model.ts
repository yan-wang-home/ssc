export interface IRateConfig {
  id?: string;
  oneYearFixedInsured?: string | null;
  twoYearFixedInsured?: string | null;
  threeYearFixedInsured?: string | null;
  fourYearFixedInsured?: string | null;
  fiveYearFixedInsured?: string | null;
  oneYearFixedInsurable?: string | null;
  twoYearFixedInsurable?: string | null;
  threeYearFixedInsurable?: string | null;
  fourYearFixedInsurable?: string | null;
  fiveYearFixedInsurable?: string | null;
  oneYearFixedConventional?: string | null;
  twoYearFixedConventional?: string | null;
  threeYearFixedConventional?: string | null;
  fourYearFixedConventional?: string | null;
  fiveYearFixedConventional?: string | null;
  fiveYearVariableInsured?: string | null;
  fiveYearVariableInsurable?: string | null;
  fiveYearVariableConventional?: string | null;
}

export const defaultValue: Readonly<IRateConfig> = {};
