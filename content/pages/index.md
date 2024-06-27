---
type: PageLayout
title: Home
colors: colors-a
backgroundImage:
  type: BackgroundImage
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 100
  url: /images/featured-Image1.jpg
sections:
  - elementId: ''
    colors: colors-f
    backgroundSize: full
    title: Avento Photography
    subtitle: This is my website - Here I upload a collection of the best of my work.
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-36
          - pb-20
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row-reverse
      title:
        textAlign: left
        fontWeight: 400
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: HeroSection
    actions:
      - type: Button
        label: 'About me '
        altText: ''
        url: /info
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: secondary
        elementId: ''
    media:
      type: ImageBlock
      url: 'https://assets.stackbit.com/components/images/default/default-image.png'
      altText: altText of the image
      caption: Caption of the image
      elementId: ''
  - colors: colors-f
    type: FeaturedProjectsSection
    elementId: ''
    actions:
      - type: Link
        label: See all projects
        url: /projects
    showDate: true
    showDescription: true
    showFeaturedImage: true
    showReadMoreLink: true
    variant: variant-b
    projects:
      - content/pages/projects/project-two.md
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-end
    subtitle: Projects
  - type: QuoteSection
    quote: |
      "See your projects from a different angle"
    name: '- Will'
    title: Head UAV Photographer at Avento
    colors: colors-f
    elementId: ''
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-9
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
      quote:
        textAlign: left
      name:
        fontWeight": 500
        textAlign: left
      title:
        fontWeight": 400
        textAlign: left
---
