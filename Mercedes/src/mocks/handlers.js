import { data } from "./data";
import { rest } from "msw";

const handlers = [
    rest.get("/cars", (req, res, ctx) => {
        return res(ctx.delay(1000), ctx.status(200), ctx.json(data))
    }),
    // rest.get("/cars/:id", (req, res, ctx) => {
    //     const {id} =req.params;

    //     const car = data.find((p) => p.id === id )

    //     if (!product) {
    //         return res(
    //             ctx.delay(2000),
    //             ctx.status(404),
    //             ctx.json({
    //                 error: "San pham d ton tai",
    //             })
    //         );
    //     }else {
    //         return res(ctx.delay(2000), ctx.status(200), ctx.json(product) )
    //     }
    // })
]

export {handlers}