import { AppProps } from "next/dist/next-server/lib/router/router"
import Button from './styles';
import Link from 'next/link'
import { Url } from "url";

interface Button {
  href: string;
}

const SubmitButton: React.FC<Button> = ({ children, href }) => (
  <Link href={href}>
    <Button>{children}</Button>
  </Link>
)

export default SubmitButton
