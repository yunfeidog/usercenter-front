import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = '蔡徐坤集团体验技术部出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'My Blog',
          title: 'My Blog',
          href: 'hhttp://yunfeidog.github.io/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined />cxk GitHub</>,
          href: 'https://github.com/yunfeidog',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'Ant Design',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
