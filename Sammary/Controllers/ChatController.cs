using Sammary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Sammary.Controllers
{
    public class ChatController : Controller
    {
        // GET: Chat
        public ActionResult Index()
        {
            return View();
        }
        static List<Chat> data = new List<Chat>
        {
            new Chat { Id = Guid.NewGuid().ToString(), Name="Амаяк", ReviewText="Привет!"},
        };

        public ActionResult GetReviews()
        {
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult AddReview(Chat review)
        {
            review.Id = Guid.NewGuid().ToString();
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