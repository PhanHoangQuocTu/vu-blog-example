import Link from 'next/link';
import { ROUTES } from '@/utils/routes';

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href={ROUTES.HOME}>Return Home</Link>
    </div>
  );
}
