export default {
  async fetch(request){
    return new Response("FiveChat Backend AKTIF! by raynaNCHAT - "+new Date().toLocaleString(), {
      headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "text/plain" }
    })
  }
}
