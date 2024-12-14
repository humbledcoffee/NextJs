export default async function Products({params}:{params:{id:string}}) {
  return <div>Dynamic routing {params.id}</div>;
}
