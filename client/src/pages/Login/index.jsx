
import { Form} from "antd";
import Button from "../../components/Button";
import { Link } from "react-router-dom";


function Login() {

  return (
    <div className="flex justify-center h-screen items-center bg-primary">
      <div className="card p-3 w-400">
        <h1 className="text-xl mb-1">Cine World Login</h1>
        <hr />
        <Form layout="vertical" className="mt-1" >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please provide your email!" }]}
          >
            <input type="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please provide your password!" }]}
          >
            <input type="password" />
          </Form.Item>

          <div className="flex flex-col mt-2 gap-1">
            <Button fullWidth title="Login" type="submit" />
            <Link to="/register" className="text-primary">
            
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
