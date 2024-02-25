namespace WebApplication1.Models
{
    public class StudentsDBMock
    {
        public static List<Student> students = new List<Student>() {
            new Student(){ID=1, Name="avi" , Grade=100 },
            new Student(){ID=2, Name="benny" , Grade=98 },
            new Student(){ID=3, Name="dora" , Grade=99 },
            new Student(){ID=4, Name="charlie" , Grade=97 },
        };
    }
}
