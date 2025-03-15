import DefaultProvider from '../providers/default-provider';

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DefaultProvider>{children}</DefaultProvider>;
}
