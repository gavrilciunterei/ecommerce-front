import React from 'react';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/Card/Card';
import { userInfo, adminLinks, name } from './Data';

const AdminDashboard = () => {
  return (
    <div>
      <Layout
        title="Admin Dashboard"
        description={`Hello ${name}`}
        className="container"
      >
        <div className="row">
          <div className="col-3">
            <Card headerName="Admin Links" itemsLink={adminLinks} />
          </div>
          <div className="col-9">
            <Card
              headerName="Admin Information"
              spacing="mb-5"
              itemsList={userInfo}
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AdminDashboard;
