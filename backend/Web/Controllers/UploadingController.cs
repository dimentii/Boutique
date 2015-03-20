using System;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using Web.Infrastructure;
using Web.Models;

namespace Web.Controllers
{
    public class UploadingController : ApiController
    {
        
        [ValidateMimeMultipartContentFilter]
        public async Task<HttpResponseMessage> Post()
        {
            try
            {
                var path = HttpContext.Current.Server.MapPath("~/Uploads/");
                var streamProvider = new FileCorrectorMultipartFormDataStreamProvider(path);
                var details = await Request.Content.ReadAsMultipartAsync(streamProvider).ContinueWith(t =>
                {
                    if(t.IsFaulted || t.IsCanceled)
                    {
                        throw new HttpResponseException(HttpStatusCode.InternalServerError);
                    }

                    var files = streamProvider.FileData.Select(i => new FileInfo(i.LocalFileName));

                    return new QuestionDetails
                    {
                        Name = streamProvider.FormData["name"],
                        Email = streamProvider.FormData["email"],
                        Phone = streamProvider.FormData["phone"],
                        Comments = streamProvider.FormData["comments"],
                        Files = files
                    };
                });

                return Request.CreateResponse(HttpStatusCode.OK, "Success");
            }
            catch(Exception)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "Exception");
            }
        }
    }
}
