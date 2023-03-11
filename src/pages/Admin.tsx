import {PageHeaderWrapper} from '@ant-design/pro-components';
import React from 'react';

const Admin: React.FC = ({children}) => {
  return (
    <PageHeaderWrapper content={' 这个页面只有 Admin 权限才能查看'}>
      {children}
    </PageHeaderWrapper>
  );
};
export default Admin;
