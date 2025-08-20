import { redirect } from 'next/navigation';

export default function RootPage() {
  // Always redirect to Portuguese (default)
  redirect('/pt');
}