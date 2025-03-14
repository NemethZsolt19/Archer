namespace Archer.Models
{
  public class Playgroundd
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public ICollection<Booking> ? Bookings { get; set; }
  }
}
