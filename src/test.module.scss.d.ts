import globalClassNames from 'srcstyle.d';
declare const classNames: typeof globalClassNames & {
  readonly test: 'test';
};
export = classNames;
