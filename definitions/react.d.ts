import * as React from 'react';

declare module 'react' {
  // From https://github.com/DefinitelyTyped/DefinitelyTyped/pull/30057/files
  function useContext<T>(context: Context<T>): T;

  export type Dispatch<A> = (value: A) => void;

  export type Reducer<S, A> = (prevState: S, action: A) => S;

  function useReducer<S, A>(
    reducer: Reducer<S, A>,
    initialState: S,
    initialAction?: A | null,
  ): [S, Dispatch<A>];

  type EffectCallback = () => void | (() => void);

  type InputIdentityList = ReadonlyArray<any>;

  function useEffect(effect: EffectCallback, inputs?: InputIdentityList): void;

  // From https://github.com/DefinitelyTyped/DefinitelyTyped/pull/29990/files
  interface ExoticComponent<P = {}> {
    /**
     * # WARNING
     *
     * Exotic components are not actually callable
     *
     * @deprecated Exotic components are not callable
     */
    (props: P): ReactElement<any> | null;
    readonly $$typeof: symbol;
  }

  interface NamedExoticComponent<P = {}> extends ExoticComponent<P> {
    displayName?: string;
  }

  type ComponentProps<T extends ComponentType<any>> = T extends ComponentType<
    infer P
  >
    ? P
    : {};

  type ComponentPropsWithRef<
    T extends ComponentType<any>
  > = T extends ComponentClass<infer P>
    ? P & ClassAttributes<InstanceType<T>>
    : T extends SFC<infer P>
    ? P
    : {};

  function memo<P extends object>(
    Component: SFC<P>,
    propsAreEqual?: (
      prevProps: Readonly<P & { children?: ReactNode }>,
      nextProps: Readonly<P & { children?: ReactNode }>,
    ) => boolean,
  ): NamedExoticComponent<P>;
  function memo<T extends ComponentType<any>>(
    Component: T,
    propsAreEqual?: (
      prevProps: Readonly<ComponentProps<T>>,
      nextProps: Readonly<ComponentProps<T>>,
    ) => boolean,
  ): NamedExoticComponent<ComponentPropsWithRef<T>>;
