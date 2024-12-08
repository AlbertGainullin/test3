import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export const LoadingIndicator = ({ isLoading }) => {
  if (!isLoading) return null;

  return <Spin indicator={<LoadingOutlined spin />} size="large" />;
};
