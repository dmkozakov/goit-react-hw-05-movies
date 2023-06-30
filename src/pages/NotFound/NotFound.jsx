import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <Link to="/">Go back</Link>
      <div>Not Found</div>
    </>
  );
}
