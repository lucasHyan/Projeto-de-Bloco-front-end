import DescriptionFlex from "../components/DescriptionFlex";

export function SiteDescription() {
  return (
    <div className="w-full h-full bg-[#ff9999] p-32 px-4">
      <div className="flex flex-col items-center justify-center mx-auto max-w-[720px]">
        <h2 className="text-5xl mb-4">Descrição do site</h2>
        <DescriptionFlex
          imageSrc="https://source.unsplash.com/random/800x600"
          text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
        />
        <DescriptionFlex
          imageSrc="https://source.unsplash.com/random/800x600"
          text="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."
          imageOnRight={true}
        />
        <DescriptionFlex
          imageSrc="https://source.unsplash.com/random/800x600"
          text="Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        />
      </div>
    </div>
  );
}