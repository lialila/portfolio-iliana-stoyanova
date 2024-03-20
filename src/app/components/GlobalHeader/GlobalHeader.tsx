import Link from "next/link";

export const GlobalHeader = (): JSX.Element => {
  return (
    <>
      <Link href="/home">
        <h1 className="text-3xl font-bold underline">Home</h1>
      </Link>

      <Link href="/biography">
        <h1 className="text-3xl font-bold underline">Biography</h1>
      </Link>
      <Link href="/media">
        <h1 className="text-3xl font-bold underline">Media</h1>
      </Link>

      <Link href="/contact">
        <h1 className="text-3xl font-bold underline">Contact</h1>
      </Link>
    </>
  );
};
