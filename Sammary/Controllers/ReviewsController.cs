using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Sammary.Controllers
{
    public class ReviewsController : Controller
    {
        // GET: Reviews
        public ActionResult Index()
        {
            return View();
        }

        static List<Reviews> data = new List<Reviews>
        {
            new Reviews { Id = Guid.NewGuid().ToString(), Name="Амаяк", ReviewText="Это текст отзыва", Date = "7.5.2017 3:57:01" },
        };

        public ActionResult GetReviews()
        {
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult AddReview(Reviews review)
        {
            DateTime todayDate = DateTime.Now;
            review.Id = Guid.NewGuid().ToString();
            review.Date = todayDate.ToString();
            data.Add(review);
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        
        public ActionResult DeleteReview(string id)
        {
            string ID = id;
            foreach (var delldate in data)
            {
                if (delldate.Id == id)
                {
                    data.Remove(delldate);
                    break;
                }
            }
                return Json(data, JsonRequestBehavior.AllowGet);
           
        }
    }
}