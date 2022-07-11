import { AppPage } from "@src/types";

const DashboardPage: AppPage = () => {
  return (
    <div className="m-auto w-full max-w-3xl">
      <div className="mt-12 flex flex-row items-center">
        <div className="flex-1 prose">
          <h1>My Collections</h1>
        </div>

        <div className="flex-none">
          <button className="btn btn-primary">Create new</button>
        </div>
      </div>

      <div className="mt-8 flex flex-row gap-4">
        <button className="btn btn-primary">Search</button>

        <input type="text" className="input flex-1" />
      </div>

      <section className="mt-4">
        <div className="card shadow-lg bg-white">
          <div className="card-body">
            <h2 className="card-title">Title of collection</h2>

            <p>The description of the collection</p>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">Something wrong</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
