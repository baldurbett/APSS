using System.Web.Mvc;

namespace APSS.Web.Controllers
{
    public class HomeController : APSSControllerBase
    {
        public ActionResult Index()
        { 
            return View();
        }
	}
}