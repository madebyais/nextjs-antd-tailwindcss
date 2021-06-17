import {Spin} from "antd";
import { LoadingOutlined } from '@ant-design/icons';

const Loading = () => (
  <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
)

export default Loading