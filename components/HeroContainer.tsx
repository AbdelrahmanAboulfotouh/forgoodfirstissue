import {Hero} from '@primer/react-brand';

export const HeroContainer = () => {
  return (
    <>
      <Hero className="hero" data-color-mode="dark">
        <Hero.Heading size="display">For Good First Issue</Hero.Heading>
        <Hero.Description size="300">
          For Good First Issue empowers developers to collaborate on open source projects with missions that are driven by social impact. It is a curated list of open source projects focused on the <a href="https://digitalpublicgoods.net/digital-public-goods/" target="_blank" rel="noopener noreferrer">Digital Public Goods (DPGs)</a> that need your help! Together, we can drive positive and lasting contributions to the world, one commit at a time.
        </Hero.Description>
        <Hero.PrimaryAction href="https://github.com/rubyforgood/happycommits/issues/new?assignees=&labels=💪+New+Project&projects=&template=suggest_project.yml&title=%5BNew+Project%5D%3A+%3Ctitle%3E">Submit a project</Hero.PrimaryAction>
      </Hero>
    </>
  );
};
