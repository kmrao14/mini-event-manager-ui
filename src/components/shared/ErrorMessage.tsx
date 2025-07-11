type Props = { message: string };

export default function ErrorMessage({ message }: Props) {
  return <p className="text-red-500 p-6">Error: {message}</p>;
}
