import Editor from "@/components/Editor";
export default function Home() {
  return (
    <main className="p-10 ">
      <h1 className="text-4xl font-bold mb-6 text-center">Docable Editor</h1>

      <div className="flex m-auto 2xl:w-[50%]">
        <Editor />
      </div>
    </main>
  );
}
