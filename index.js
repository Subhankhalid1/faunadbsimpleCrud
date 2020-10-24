var faunadb = require('faunadb'),
    q = faunadb.query;


(async () => {

    var adminClient = new faunadb.Client({ secret: 'fnAD47FCvzACBXLZXHH1spPy1_n03GeKhyPfc2a2' });

    try {
        const result = await adminClient.query(
            //use create database in faunadb
            // q.CreateDatabase({ name: 'tampdb' })

            // q.CreateKey({
            //     database: q.Database('tampdb'),
            //     role: 'admin',
            //   })

            // q.CreateCollection({ name: 'chat' })

            // q.CreateIndex({
            //     name: 'detail_by_title',
            //     source: q.Collection('chat'),
            //     terms: [{ field: ['data', 'detail'] }],
            //   })

            // q.Create(
            //     q.Collection('chat'),
            //     { data: { detail: 'Doing well ' } },
            //   )


            // q.Map(
            //     [
            //       'I am Rana Subhan From Okara',
            //       'I want to be an IT Engineer',
            //       'to make a part of our country grow or world revolution',
            //     ],
            //     q.Lambda(
            //       'detail',
            //       q.Create(
            //         q.Collection('chat'),
            //         { data: { title: q.Var('detail') } },
            //       )
            //     ),
            //   )


            // q.Get(q.Ref(q.Collection('chat'), '280264197752750597'))

            // q.Get(q.Match(q.Index('detail_by_title'), "Doing well "))

            // q.Update(
            //     q.Ref(q.Collection('chat'), '280263860859961861'),
            //     { data: { detail:"Not doing well in this current sitution" } },
            //   )

            //    q.Replace(
            //     q.Ref(q.Collection('chat'), '280263860859961861'),
            //     { data: { detail:"I am not feel doing well in this current era." } },
            //   )
            
            q.Delete(
                q.Ref(q.Collection('chat'), '280263813073207813')
              )

        );
        console.log(result)
    } catch (err) {
        console.log(err)
    }


})();