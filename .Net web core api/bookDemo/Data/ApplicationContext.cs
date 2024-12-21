using Microsoft.AspNetCore.Connections.Features;
using bookDemo.Models;

namespace bookDemo.Data
{
    public static class ApplicationContext
    {
        public static List<Book> Books { get; set; }
        static ApplicationContext()
        {
            Books = new List<Book>()
            {
                new Book(){Id=1, Title="First Book", Price=100},
                new Book(){Id=2, Title="Second Book", Price = 75},
                new Book(){Id=3, Title="Third Book", Price=150}
            };
        }
    }
}
