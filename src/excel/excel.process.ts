import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('bullForExcel')
export class ExcelConsumer {
  @Process('create')
  createJob(job: Job) {
    console.log('createCandidate1', job.data);

    const query = `
        mutation{
        createStudent(createStudentInput:{
            name:${job.data.name}
            email:${job.data.age}
            dob:${job.data.dob}
            age:66
        })
        }
    `;

    fetch('https://localhost:3000/graphql', {
      method: 'POST',
      body: JSON.stringify({ query }),
    })
      .then((res) => res.text())
      .then((body) => console.log(body)) // {"data":{"repository":{"issues":{"totalCount":247}}}}
      .catch((error) => console.error(error));
  }
}
