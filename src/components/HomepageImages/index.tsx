import Heading from '@theme/Heading';
import styles from './styles.module.css';

const items: {
  imgSrc: string | [string, string];
  imgAlt: string;
  title: string;
}[] = [
  {
    imgSrc: [
      '/img/frontend/instanceconsole.jpeg#light',
      '/img/frontend/instanceconsole-dark.jpeg#dark',
    ],
    imgAlt: '控制台',
    title: '前端网页控制台',
  },
  {
    imgSrc: '/img/backend/console.png',
    imgAlt: '控制台',
    title: '后端命令行控制台',
  },
];

export default function HomepageImages(): JSX.Element {
  return (
    <>
      <div>
        <div className={styles.container}>
          {items.map((i) => (
            <>
              <div className={styles['items-container']}>
                <Heading as="h2">{i.title}</Heading>
                <div className={styles['image-container']}>
                  {Array.isArray(i.imgSrc) ? (
                    <>
                      <img src={i.imgSrc[0]} alt={i.imgAlt} />
                      <img src={i.imgSrc[1]} alt={i.imgAlt} />
                    </>
                  ) : (
                    <img src={i.imgSrc} alt={i.imgAlt} />
                  )}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
