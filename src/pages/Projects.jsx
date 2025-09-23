import { CTA } from "../components";
import { projects, achievements } from "../constants/index.js";

const Card = ({ title, subtitle, body, href, buttonLabel = "Click here" }) => (
  <div className="rounded-2xl bg-white/90 shadow p-5 flex flex-col gap-3">
    <div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      {subtitle ? <p className="text-sm text-slate-500">{subtitle}</p> : null}
    </div>

    {body ? <p className="text-slate-600 text-sm">{body}</p> : null}

    {href ? (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="mt-auto inline-block px-4 py-2 rounded-lg bg-slate-900 text-white text-sm hover:bg-black"
      >
        {buttonLabel}
      </a>
    ) : null}
  </div>
);

const EmptyBlock = ({ title, tip }) => (
  <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center">
    <h4 className="text-slate-800 font-semibold">{title}</h4>
    <p className="text-slate-500 mt-2 text-sm">{tip}</p>
  </div>
);

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">Work I’m proud of</h1>
      <p className="mt-4 text-slate-600">
        A quick snapshot of hands-on projects and career milestones.
      </p>

      {/* Projects FIRST */}
      <div className="mt-10">
        <h2 className="subhead-text">Projects</h2>

        {!projects || projects.length === 0 ? (
          <EmptyBlock
            title="Projects coming soon"
            tip="Add items in src/constants/index.js under export const projects = […]"
          />
        ) : (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <Card
                key={`${p.name}-${i}`}
                title={p.name}
                body={p.description}
                href={p.link}
                buttonLabel="Click here"
              />
            ))}
          </div>
        )}
      </div>

      {/* Achievements SECOND */}
      <div className="mt-16">
        <h2 className="subhead-text">Achievements</h2>

        {!achievements || achievements.length === 0 ? (
          <EmptyBlock
            title="Achievements coming soon"
            tip="Add items in src/constants/index.js under export const achievements = […]"
          />
        ) : (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((a, i) => (
              <Card
                key={`${a.name}-${i}`}
                title={a.name}
                subtitle={
                  a.issuer && a.date
                    ? `${a.issuer} • ${a.date}`
                    : a.issuer || a.date
                }
                body={a.description}
                href={a.link}
                buttonLabel="View"
              />
            ))}
          </div>
        )}
      </div>

      <hr className="my-12 border-slate-200" />
      <CTA />
    </section>
  );
};

export default Projects;
