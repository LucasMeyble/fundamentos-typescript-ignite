
/**
 * name - string
 * duration - number
 * educator - string
 */

interface Couser{

  name: string;
  duration: number;
  educator: string;

}


class CreateCourseService {
  execute({name, duration, educator}: Couser){
    console.log(name, duration, educator);
  };

}

export default new CreateCourseService;