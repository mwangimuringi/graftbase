// app/dashboard/files/page.tsx
const mockFiles = [
    { name: "resume.pdf", uploadedAt: "2025-04-01" },
    { name: "report.xlsx", uploadedAt: "2025-03-28" },
  ];
  
  export default function FilesPage() {
    return (
      <section className="p-4">
        <h1 className="text-2xl font-bold mb-4">Your Files</h1>
        <ul className="bg-white divide-y rounded shadow">
          {mockFiles.map((file, index) => (
            <li key={index} className="p-4 flex justify-between">
              <span>{file.name}</span>
              <span className="text-sm text-gray-400">Uploaded {file.uploadedAt}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  