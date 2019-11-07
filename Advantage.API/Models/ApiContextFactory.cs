using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Advantage.API.Models
{
public class ApiContextFactory : IDesignTimeDbContextFactory<ApiContext>
    {
        public ApiContextFactory()
        {
        }

        public ApiContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<ApiContext>();
            builder.UseNpgsql("User ID=pdev;Password=pdev123;Server=localhost;Port=5432;Database=Advantage.API.Dev;Integrated Security=true;Pooling=true;");

            return new ApiContext(builder.Options);
        }
    }
}