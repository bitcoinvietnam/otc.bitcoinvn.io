import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title?: ReactNode;
  description?: any;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="text-5xl text-white font-bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    <div className="text-2xl mt-4 mb-16 text-gray-200 items-stretch ">
      {props.description}
    </div>

    {props.button}
  </header>
);

export { HeroOneButton };
