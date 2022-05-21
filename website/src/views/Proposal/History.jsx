/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/solid'

const steps = [
  { name: 'Create Proposal', description: 'May 17th, 2022 - 12:30 AM.', href: '#', status: 'complete' },
  {
    name: 'Active',
    description: 'May 20th, 2022 - 12:30 AM.',
    href: '#',
    status: 'current',
  },
  { name: 'Succeeded', description: 'May 23th, 2022 - 12:30 AM.', href: '#', status: 'upcoming' },
  { name: 'Queued', description: 'May 26th, 2022 - 12:30 AM.', href: '#', status: 'upcoming' },
  { name: 'Executed', description: 'May 29th, 2022 - 12:30 AM.', href: '#', status: 'upcoming' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function History() {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="overflow-hidden">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative')}>
            {step.status === 'complete' ? (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-indigo-600" aria-hidden="true" />
                ) : null}
                <a href={step.href} className="relative flex items-start group">
                  <span className="h-9 flex items-center">
                    <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                      <CheckIcon className="w-5 h-5 text-white" aria-hidden="true" />
                    </span>
                  </span>
                  <span className="ml-4 min-w-0 flex flex-col text-left">
                    <span className="text-xs font-semibold tracking-wide uppercase">{step.name}</span>
                    <span className="text-sm text-gray-500">{step.description}</span>
                  </span>
                </a>
              </>
            ) : step.status === 'current' ? (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true" />
                ) : null}
                <a href={step.href} className="relative flex items-start group" aria-current="step">
                  <span className="h-9 flex items-center" aria-hidden="true">
                    <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full">
                      <span className="h-2.5 w-2.5 bg-indigo-600 rounded-full" />
                    </span>
                  </span>
                  <span className="ml-4 min-w-0 flex flex-col  text-left">
                    <span className="text-xs font-semibold tracking-wide uppercase text-indigo-600">{step.name}</span>
                    <span className="text-sm text-gray-500">{step.description}</span>
                  </span>
                </a>
              </>
            ) : (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true" />
                ) : null}
                <a href={step.href} className="relative flex items-start group">
                  <span className="h-9 flex items-center" aria-hidden="true">
                    <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                      <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" />
                    </span>
                  </span>
                  <span className="ml-4 min-w-0 flex flex-col  text-left">
                    <span className="text-xs font-semibold tracking-wide uppercase text-gray-500">{step.name}</span>
                    <span className="text-sm text-gray-500">{step.description}</span>
                  </span>
                </a>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
