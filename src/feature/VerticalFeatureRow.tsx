import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  const router = useRouter();
  const subtitles = props.subtitle.split(',').forEach((sub) => {
    return <div className="mt-6 text-xl leading-9">{sub}</div>;
  });
  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 text-center sm:px-3">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
        {subtitles}
      </div>

      <div className="w-full sm:w-1/2 p-6 rounded-xl">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
