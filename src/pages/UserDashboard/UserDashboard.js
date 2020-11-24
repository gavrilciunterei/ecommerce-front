import React from 'react';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/Card/Card';
import { userLinks, name, userInfo, purchaseHisoty } from './Data';

const UserDashboard = () => {
  return (
    <div>
      <Layout
        title="User Dashboard"
        description={`Hello ${name}`}
        className="container"
      >
        <div className="row">
          <div className="col-3">
            <Card headerName="User Links" itemsLink={userLinks} />
          </div>
          <div className="col-9">
            <Card
              headerName="User Information"
              spacing="mb-5"
              itemsList={userInfo}
            />
            <Card
              headerName="History Information"
              spacing="mb-5"
              itemsList={purchaseHisoty}
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default UserDashboard;
