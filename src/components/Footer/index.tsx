import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = 'ikun团队出品，必属精品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Ant Design Pro',
          title: 'Ant Design Pro',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> yunfei GitHub </>,
          href: 'https://github.com/yunfeidog',
          blankTarget: true,
        },
        {
          key: 'Blog',
          title: 'Blog',
          href: 'https://yunfeidog.github.io/blogv2/',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
