import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '易用',
    description: (
      <>
        开箱即食，不需要太多的网络安全知识，也没有繁琐的配置项，支持手机和服务器部署
      </>
    ),
  },
  {
    title: '美观',
    description: (
      <>
        使用
        <a
          href="https://github.com/justboil/admin-one-vue-tailwind"
          target="_blank"
        >
          admin-one-vue-tailwind
        </a>
        管理模板，实现精美简约的网页版控制台，完美还原原汁原味的终端体验
      </>
    ),
  },
  {
    title: '支持多前置',
    description: (
      <>
        目前已支持了Serein、EQ-BDS和MCDR，当然还有更多实例插件正在开发中，你可以点
        <a href="docs/guide/composition/instance/">此处</a>
        查看支持的所有前置实例
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row underline-links">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
