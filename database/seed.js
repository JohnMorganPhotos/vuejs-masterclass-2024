/* eslint-env node */

import { faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SERVICE_ROLE_KEY)

const logStep = (stepMessage) => {
  console.log(stepMessage)
}

const seedProjects = async (numEntries, userId) => {
  logStep('Seeding projects...')

  const projects = []

  for (let i = 0; i < numEntries; i++) {
    const name = faker.lorem.words(3)

    logStep('Seeding project: ' + name)

    projects.push({
      name: name,
      slug: name.toLocaleLowerCase().replace(/ /g, '-'), // replace all spaces with dashes
      description: faker.lorem.paragraphs(2),
      status: faker.helpers.arrayElement(['in-progress', 'completed']),
      collaborators: faker.helpers.arrayElements([userId]),
    })
  }

  const { data, error } = await supabase.from('projects').insert(projects).select('id')

  // if (error) return logErrorAndExit('Projects', error)

  logStep('Projects seeded successfully.')

  return data
}

await seedProjects(3, 1)
