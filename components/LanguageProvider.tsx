"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import type { Project } from "@/data/projects";

export type Language = "en" | "zh" | "ja";

type Dictionary = Record<string, string>;

const dictionaries: Record<Language, Dictionary> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.work": "Work",
    "nav.journal": "Journal",
    "nav.contact": "Contact me",
    "home.recent": "Recent",
    "home.projects": "Projects",
    "footer.title": "Let's chat!",
    "footer.body":
      "I'd love to hear more about your brand and answer any questions you may have about my work.",
    "footer.email": "Email me",
    "footer.base": "Based in Tokyo, Japan.",
    "footer.global": "Working with clients globally.",
    "about.hero.1": "Turning loose",
    "about.hero.2": "ideas into",
    "about.hero.3": "clear systems",
    "about.overlay.1": "Make",
    "about.overlay.2": "sense,",
    "about.overlay.3": "not",
    "about.overlay.4": "noise.",
    "about.intro":
      "A calm visual system gives people a place to land, a path to follow, and a reason to remember you.",
    "about.story.label": "Story",
    "about.story":
      "I'm Hinna, a designer focused on making brands, interfaces, and campaign visuals feel easier to understand, easier to use, and easier to trust.",
    "about.approach.label": "Approach",
    "about.approach.title": "Persistence & motivation",
    "about.approach.1":
      "I start by listening for the part that is still tangled. The goal is not to decorate the idea, but to understand what the design needs to explain before it becomes visible.",
    "about.approach.2":
      "From there, I shape a visual direction that can move across brand, web, ads, packaging, ecommerce, and printed surfaces without losing its center.",
    "about.experience": "Experience",
    "about.resume.1.title": "Brand, UIUX, web, packaging, and campaign design",
    "about.resume.1.meta": "Independent studio practice",
    "about.resume.1.year": "Now",
    "about.resume.2.title": "Visual systems for thoughtful products and services",
    "about.resume.2.meta": "Identity, digital, ecommerce, and launch materials",
    "about.resume.3.title":
      "Design direction across digital and physical touchpoints",
    "about.resume.3.meta": "Brand foundations, web pages, ads, exhibitions",
    "about.resume.4.title":
      "Ongoing research in clarity, rhythm, and useful beauty",
    "about.resume.4.meta":
      "References, systems, interface details, visual storytelling",
    "about.resume.4.year": "Always",
    "about.personal":
      "When I'm not designing, I'm collecting references, comparing tiny layout decisions, testing visual rhythms, and saving ideas that help a brand feel less confusing.",
    "about.currently": "Currently",
    "about.currently.body":
      "Building visual systems for brand, UIUX, web, SNS ads, ecommerce banners, graphic design, packaging, and exhibition.",
    "about.contact": "Contact",
    "about.contact.title": "Have an idea that needs shape?",
    "about.contact.body":
      "Tell me what you are making, what feels unclear, and where the design needs to work. I'll help turn it into something people can understand.",
    "contact.label": "Contact me",
    "contact.hero.1": "Let's make",
    "contact.hero.2": "your idea",
    "contact.hero.3": "make sense",
    "contact.intro": "I'd love to hear about your project.",
    "contact.body.1":
      "Use this form to share the details of your brand, website, packaging, or studio project. The more context you include, the easier it is to understand what needs to make sense.",
    "contact.body.2":
      "If the project feels aligned, I'll follow up by email to arrange a discovery call and talk through scope, timing, and next steps.",
    "contact.reply": "You can usually expect a reply within 2 business days.",
    "contact.submit": "Let's do this!",
    "form.name": "Name or nickname",
    "form.email": "Email address",
    "form.business": "Business or project name",
    "form.website": "Website address",
    "form.location": "Location",
    "form.deadline": "Project deadline",
    "form.about": "Tell me about your business or idea",
    "form.problem": "What problem are you looking to overcome?",
    "form.more": "Anything else you would like to share?",
    "form.location.placeholder": "Country / City",
    "form.deadline.placeholder": "For example, do you have a launch date?",
    "form.about.placeholder": "What do you do? Who do you serve? What do you sell?",
    "form.problem.placeholder": "Tell me what is not making sense yet.",
    "form.more.placeholder": "Share links, notes, or context that would help.",
    "project.back": "Back to work",
    "project.details": "Project details",
    "project.sector": "Sector",
    "project.scope": "Scope",
    "project.context": "Market context",
    "project.challenge": "The challenge",
    "project.idea": "The idea",
    "project.outcome": "Outcome",
    "project.outcome.title": "One clear idea, built to move.",
    "project.start": "Start a project",
    "project.start.title": "Have an idea that needs to make sense?",
    "carousel.title": "More selected work",
    "carousel.view": "View project",
    "carousel.next": "Show next project"
  },
  zh: {
    "nav.home": "首页",
    "nav.about": "关于",
    "nav.services": "服务",
    "nav.work": "作品",
    "nav.journal": "日志",
    "nav.contact": "联系我",
    "home.recent": "近期",
    "home.projects": "项目",
    "footer.title": "聊聊吧！",
    "footer.body": "欢迎告诉我更多关于你的品牌，也欢迎向我询问任何与作品相关的问题。",
    "footer.email": "邮件联系",
    "footer.base": "常驻日本东京。",
    "footer.global": "面向全球客户提供服务。",
    "about.hero.1": "把零散的",
    "about.hero.2": "想法变成",
    "about.hero.3": "清晰的系统",
    "about.overlay.1": "让它",
    "about.overlay.2": "讲得通，",
    "about.overlay.3": "而不是",
    "about.overlay.4": "更嘈杂。",
    "about.intro": "一个沉静清晰的视觉系统，能让人找到落点、理解路径，并记住你。",
    "about.story.label": "关于我",
    "about.story":
      "我是 Hinna，一名设计师，专注于让品牌、界面和传播视觉更容易理解、更容易使用，也更值得信任。",
    "about.approach.label": "方法",
    "about.approach.title": "坚持与驱动力",
    "about.approach.1":
      "我会先听清楚那些仍然纠缠不清的部分。目标不是给想法加装饰，而是在它被看见之前，先弄明白设计真正需要解释什么。",
    "about.approach.2":
      "之后，我会建立一套能够延伸到品牌、网站、广告、包装、电商和印刷物的视觉方向，同时保留想法的核心。",
    "about.experience": "经验",
    "about.resume.1.title": "品牌、UIUX、网站、包装与传播设计",
    "about.resume.1.meta": "独立设计实践",
    "about.resume.1.year": "现在",
    "about.resume.2.title": "为有想法的产品与服务建立视觉系统",
    "about.resume.2.meta": "品牌识别、数字设计、电商与上市物料",
    "about.resume.3.title": "连接数字与实体触点的设计方向",
    "about.resume.3.meta": "品牌基础、网页、广告与展览",
    "about.resume.4.title": "持续研究清晰度、节奏与实用的美感",
    "about.resume.4.meta": "参考、系统、界面细节与视觉叙事",
    "about.resume.4.year": "持续进行",
    "about.personal":
      "不做设计时，我会收集参考、比较细小的版式差异、测试视觉节奏，并保存那些能让品牌变得更清楚的想法。",
    "about.currently": "目前",
    "about.currently.body":
      "正在为品牌、UIUX、网站、SNS 广告、电商横幅、平面设计、包装与展览建立视觉系统。",
    "about.contact": "联系",
    "about.contact.title": "有一个需要成形的想法吗？",
    "about.contact.body":
      "告诉我你正在做什么、哪里还不够清楚，以及设计需要在哪些场景发挥作用。我会帮你把它变成容易理解的东西。",
    "contact.label": "联系我",
    "contact.hero.1": "让我们把",
    "contact.hero.2": "你的想法",
    "contact.hero.3": "讲清楚",
    "contact.intro": "很期待听听你的项目。",
    "contact.body.1":
      "请通过表单分享你的品牌、网站、包装或工作室项目。提供的背景越充分，我就越容易理解真正需要梳理的问题。",
    "contact.body.2":
      "如果项目方向合适，我会通过邮件与你联系，安排一次沟通，并讨论范围、时间与下一步。",
    "contact.reply": "通常会在 2 个工作日内回复。",
    "contact.submit": "开始聊聊",
    "form.name": "称呼或昵称",
    "form.email": "电子邮箱",
    "form.business": "品牌或项目名称",
    "form.website": "网站地址",
    "form.location": "所在地",
    "form.deadline": "项目截止时间",
    "form.about": "请介绍你的业务或想法",
    "form.problem": "你希望解决什么问题？",
    "form.more": "还有其他想分享的吗？",
    "form.location.placeholder": "国家 / 城市",
    "form.deadline.placeholder": "例如：是否有确定的上线日期？",
    "form.about.placeholder": "你在做什么？服务谁？提供什么产品或服务？",
    "form.problem.placeholder": "请告诉我目前还没有理顺的部分。",
    "form.more.placeholder": "可以分享链接、备注或其他有帮助的背景。",
    "project.back": "返回作品",
    "project.details": "项目详情",
    "project.sector": "领域",
    "project.scope": "服务范围",
    "project.context": "市场背景",
    "project.challenge": "项目挑战",
    "project.idea": "核心概念",
    "project.outcome": "成果",
    "project.outcome.title": "一个清晰的想法，能够持续延展。",
    "project.start": "开始项目",
    "project.start.title": "有一个需要讲清楚的想法吗？",
    "carousel.title": "更多精选作品",
    "carousel.view": "查看项目",
    "carousel.next": "查看下一个项目"
  },
  ja: {
    "nav.home": "ホーム",
    "nav.about": "私について",
    "nav.services": "サービス",
    "nav.work": "実績",
    "nav.journal": "ジャーナル",
    "nav.contact": "お問い合わせ",
    "home.recent": "最近の",
    "home.projects": "プロジェクト",
    "footer.title": "お話ししましょう！",
    "footer.body":
      "ブランドについてぜひお聞かせください。制作に関するご質問もお気軽にどうぞ。",
    "footer.email": "メールする",
    "footer.base": "東京を拠点に活動しています。",
    "footer.global": "世界中のクライアントに対応しています。",
    "about.hero.1": "曖昧な",
    "about.hero.2": "アイデアを",
    "about.hero.3": "明確な仕組みに",
    "about.overlay.1": "意味を",
    "about.overlay.2": "つくる。",
    "about.overlay.3": "ノイズは",
    "about.overlay.4": "増やさない。",
    "about.intro":
      "穏やかで明確なビジュアルシステムは、人が立ち止まり、理解し、記憶するための道筋をつくります。",
    "about.story.label": "私について",
    "about.story":
      "Hinnaです。ブランド、インターフェース、キャンペーンビジュアルを、より分かりやすく、使いやすく、信頼できるものにするデザイナーです。",
    "about.approach.label": "アプローチ",
    "about.approach.title": "粘り強さと動機",
    "about.approach.1":
      "まず、まだ整理されていない部分に耳を傾けます。アイデアを飾るのではなく、見える形にする前に、デザインが何を伝えるべきかを理解します。",
    "about.approach.2":
      "そこから、ブランド、ウェブ、広告、パッケージ、EC、印刷物へと展開できる、軸のあるビジュアルの方向性をつくります。",
    "about.experience": "経験",
    "about.resume.1.title": "ブランド、UIUX、ウェブ、パッケージ、広告デザイン",
    "about.resume.1.meta": "独立したデザイン活動",
    "about.resume.1.year": "現在",
    "about.resume.2.title": "思いのある商品・サービスのビジュアルシステム",
    "about.resume.2.meta": "アイデンティティ、デジタル、EC、ローンチ素材",
    "about.resume.3.title": "デジタルと実物をつなぐデザインディレクション",
    "about.resume.3.meta": "ブランド基盤、ウェブ、広告、展示",
    "about.resume.4.title": "明快さ、リズム、実用的な美しさの継続研究",
    "about.resume.4.meta": "リファレンス、システム、UIの細部、視覚的な物語",
    "about.resume.4.year": "継続中",
    "about.personal":
      "デザインをしていない時は、参考資料を集め、小さなレイアウトの違いを比べ、視覚的なリズムを試し、ブランドを分かりやすくするヒントを保存しています。",
    "about.currently": "現在",
    "about.currently.body":
      "ブランド、UIUX、ウェブ、SNS広告、ECバナー、グラフィック、パッケージ、展示のビジュアルシステムを制作しています。",
    "about.contact": "お問い合わせ",
    "about.contact.title": "形にしたいアイデアがありますか？",
    "about.contact.body":
      "何をつくっているのか、どこがまだ曖昧なのか、デザインがどこで機能すべきかを教えてください。伝わる形へ整理します。",
    "contact.label": "お問い合わせ",
    "contact.hero.1": "アイデアを",
    "contact.hero.2": "伝わる形に",
    "contact.hero.3": "整えましょう",
    "contact.intro": "あなたのプロジェクトについてお聞かせください。",
    "contact.body.1":
      "ブランド、ウェブサイト、パッケージ、スタジオプロジェクトについてフォームでお知らせください。背景が詳しいほど、整理すべき課題を理解しやすくなります。",
    "contact.body.2":
      "内容が合いそうであれば、メールでご連絡し、ヒアリングの日程、範囲、スケジュール、次のステップをご相談します。",
    "contact.reply": "通常2営業日以内に返信いたします。",
    "contact.submit": "相談を始める",
    "form.name": "お名前またはニックネーム",
    "form.email": "メールアドレス",
    "form.business": "事業名またはプロジェクト名",
    "form.website": "ウェブサイト",
    "form.location": "所在地",
    "form.deadline": "希望納期",
    "form.about": "事業やアイデアについて教えてください",
    "form.problem": "どのような課題を解決したいですか？",
    "form.more": "その他に共有したいことはありますか？",
    "form.location.placeholder": "国 / 都市",
    "form.deadline.placeholder": "例：公開予定日は決まっていますか？",
    "form.about.placeholder": "事業内容、対象となる人、商品やサービスについて",
    "form.problem.placeholder": "まだ整理できていない部分を教えてください。",
    "form.more.placeholder": "リンク、メモ、参考情報などをご共有ください。",
    "project.back": "実績一覧へ戻る",
    "project.details": "プロジェクト詳細",
    "project.sector": "分野",
    "project.scope": "担当範囲",
    "project.context": "市場背景",
    "project.challenge": "課題",
    "project.idea": "コンセプト",
    "project.outcome": "成果",
    "project.outcome.title": "ひとつの明確なアイデアを、広がる仕組みへ。",
    "project.start": "プロジェクトを始める",
    "project.start.title": "整理して伝えたいアイデアがありますか？",
    "carousel.title": "その他の実績",
    "carousel.view": "プロジェクトを見る",
    "carousel.next": "次のプロジェクトを見る"
  }
};

type ProjectTranslation = Pick<
  Project,
  | "category"
  | "summary"
  | "sector"
  | "context"
  | "challenge"
  | "conceptTitle"
  | "concept"
  | "outcome"
  | "quote"
  | "services"
>;

const projectTranslations: Record<
  Exclude<Language, "en">,
  Record<string, ProjectTranslation>
> = {
  zh: {
    "cove-naturals": {
      category: "品牌识别",
      summary:
        "为个人护理品牌打造的明亮产品型视觉概念，以清晰包装与温暖的传播图像为核心。",
      sector: "个人护理",
      context:
        "Cove Naturals 是一个正在成长的个人护理概念品牌，需要在竞争激烈的市场中同时建立清晰度、亲和力与货架识别度。",
      challenge:
        "项目需要建立一套自然但不安静、富有表达力但不失日常护理产品信任感的系统。",
      conceptTitle: "清晰可感的护理",
      concept:
        "视觉识别采用直接的字体、充足的色块与产品优先的信息层级，让系列易于理解，同时为更活泼的传播语气保留空间。",
      outcome:
        "最终系统以统一而灵活的视觉语言连接包装、电商、社交内容与上市物料。",
      quote: "这套设计让产品拥有更鲜明的观点，也让整个系列更容易被理解。",
      services: ["品牌识别", "艺术指导", "数字视觉系统"]
    },
    "aster-beauty": {
      category: "包装设计",
      summary:
        "为美容配件打造的清晰包装系统，以柔和影棚背景和模块化产品家族为核心。",
      sector: "美容配件",
      context:
        "Aster Beauty 需要一个能承载不断扩展的工具产品线，同时避免系列变得杂乱的包装方向。",
      challenge:
        "项目需要在不同包装尺寸中平衡产品信息、型号识别和鲜明的零售存在感。",
      conceptTitle: "一个系统，多种日常仪式",
      concept:
        "模块化边框、严格的信息层级与克制的色彩编码，让每件产品保持个性，同时维持系列的一致识别。",
      outcome:
        "系统可以从小型配件扩展到大型套装，并自然延伸到电商图像、传播版式与零售沟通。",
      quote: "灵活的基础系统，让不断增长的产品线显得有序而不是复杂。",
      services: ["包装设计", "命名", "传播方向"]
    },
    "earth-house": {
      category: "包装设计",
      summary:
        "一个家居用品包装概念，以安静的厨房场景、新鲜水果和温暖反光材质呈现。",
      sector: "家居清洁",
      context:
        "Earth House 面向希望日常产品实用、负责任，同时也适合留在生活空间中的消费者。",
      challenge:
        "设计既要表达清洁效果与环保意识，又要避开临床感清洁用品和乡村式可持续品牌的惯用视觉。",
      conceptTitle: "自然地好用",
      concept:
        "设计方向把自信的产品信息与温暖的居家摄影结合，让产品既足够高效，也足够融入日常空间。",
      outcome:
        "清晰的包装与传播系统把产品、成分与生活方式连接起来，而不过度解释。",
      quote: "最终方向实用、温暖，并且能在真实使用场景中被迅速识别。",
      services: ["包装设计", "艺术指导", "摄影指导"]
    },
    "soft-archive": {
      category: "编辑视觉系统",
      summary:
        "为文化工作室设计的图像驱动编辑框架，适用于文章、发布内容和季节性系列。",
      sector: "文化与编辑",
      context:
        "Soft Archive 是一个文化工作室的编辑概念，用于发布文章、项目、参考资料与不断变化的季节性内容。",
      challenge:
        "系统需要有足够的个性体现作者感，同时能够适应差异很大的图像比例与文字体量。",
      conceptTitle: "为注意力建立框架",
      concept:
        "克制的网格和富有表现力的字号变化，形成可以在安静阅读、图像故事和简短公告之间切换的节奏。",
      outcome:
        "这套框架让工作室拥有可识别的编辑声音，同时不把每个故事强行塞进同一种视觉形状。",
      quote: "内容需要空间时，它保持安静；故事需要表达时，它也能够放大声音。",
      services: ["编辑设计", "模板系统", "设计系统"]
    }
  },
  ja: {
    "cove-naturals": {
      category: "ブランドアイデンティティ",
      summary:
        "明快なパッケージと温かいキャンペーンイメージを軸にした、パーソナルケアブランドのビジュアルコンセプト。",
      sector: "パーソナルケア",
      context:
        "Cove Naturals は、競争の激しい市場で、分かりやすさ、親しみやすさ、店頭での認知を同時に必要とする成長中のブランドです。",
      challenge:
        "自然でありながら静かすぎず、表現力がありながら日用品としての信頼を失わないシステムが求められました。",
      conceptTitle: "分かりやすく感じるケア",
      concept:
        "直接的なタイポグラフィ、広いカラーフィールド、商品を優先した情報設計により、シリーズを理解しやすくしながら、遊びのある表現にも余白を残しました。",
      outcome:
        "パッケージ、EC、SNS、ローンチ素材をひとつの柔軟なビジュアル言語でつないでいます。",
      quote: "商品に強い視点を与えながら、シリーズ全体をより分かりやすくできました。",
      services: ["ブランド設計", "アートディレクション", "デジタルシステム"]
    },
    "aster-beauty": {
      category: "パッケージデザイン",
      summary:
        "柔らかなスタジオ背景とモジュール化された商品群で構成する、美容アクセサリーのパッケージシステム。",
      sector: "美容アクセサリー",
      context:
        "Aster Beauty には、幅広く増えていくツールを整理し、商品群を視覚的なノイズにしないパッケージの方向性が必要でした。",
      challenge:
        "異なるサイズのパッケージで、商品情報、種類の識別、店頭での存在感を両立することが課題でした。",
      conceptTitle: "ひとつの仕組み、多様な習慣",
      concept:
        "モジュール式のフレーム、明確な情報階層、抑えた色分けにより、各商品に個性を持たせながらシリーズ全体をつなげています。",
      outcome:
        "小さなアクセサリーから大型キットまで拡張でき、EC画像、キャンペーン、店頭コミュニケーションにも展開できます。",
      quote: "柔軟な土台によって、増えていく商品群を複雑ではなく整ったものにできました。",
      services: ["パッケージ", "ネーミング", "キャンペーン設計"]
    },
    "earth-house": {
      category: "パッケージデザイン",
      summary:
        "静かなキッチン、新鮮な果物、温かな反射素材で表現したホームケア商品のパッケージコンセプト。",
      sector: "ホームケア",
      context:
        "Earth House は、実用的で責任があり、日常の空間に置いておきたくなる商品を求める人のためのホームケアコンセプトです。",
      challenge:
        "洗浄力と環境への配慮を伝えながら、医療的な清潔感や素朴なエコ表現に頼らないことが課題でした。",
      conceptTitle: "自然に、使いやすく",
      concept:
        "明快な商品情報と温かな生活写真を組み合わせ、毎日使える効果と、家に置ける心地よさを両立しています。",
      outcome:
        "商品、成分、暮らしを、説明しすぎることなく結ぶパッケージとキャンペーンシステムです。",
      quote: "実用的で温かく、必要な瞬間にすぐ認識できる方向性になりました。",
      services: ["パッケージ", "アートディレクション", "撮影ディレクション"]
    },
    "soft-archive": {
      category: "エディトリアルシステム",
      summary:
        "エッセイ、リリース、季節のコレクションに対応する、文化スタジオのための画像中心の編集フレームワーク。",
      sector: "カルチャー・編集",
      context:
        "Soft Archive は、文章、リリース、資料、季節ごとのコレクションを発信する文化スタジオの編集コンセプトです。",
      challenge:
        "著者性を感じる個性を保ちながら、異なる画像比率や文章量に柔軟に対応する必要がありました。",
      conceptTitle: "注意を受け止めるフレーム",
      concept:
        "抑えたグリッドと大胆なスケールの変化によって、静かな読書、画像中心の物語、短い告知を行き来するリズムをつくります。",
      outcome:
        "すべての記事を同じ形に押し込まずに、スタジオらしい編集の声を生み出す仕組みです。",
      quote: "内容に余白が必要な時は静かに、物語が求める時は表現豊かに機能します。",
      services: ["エディトリアル", "テンプレート", "デザインシステム"]
    }
  }
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  localizeProject: (project: Project) => Project;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("hinna-language");
    if (savedLanguage === "en" || savedLanguage === "zh" || savedLanguage === "ja") {
      setLanguageState(savedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang =
      language === "zh" ? "zh-CN" : language === "ja" ? "ja" : "en";
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => {
    function setLanguage(nextLanguage: Language) {
      setLanguageState(nextLanguage);
      window.localStorage.setItem("hinna-language", nextLanguage);
    }

    function t(key: string) {
      return dictionaries[language][key] ?? dictionaries.en[key] ?? key;
    }

    function localizeProject(project: Project): Project {
      if (language === "en") {
        return project;
      }

      const translation = projectTranslations[language][project.slug];
      return translation ? { ...project, ...translation } : project;
    }

    return { language, setLanguage, t, localizeProject };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}

export function LocalizedText({ textKey }: { textKey: string }) {
  const { t } = useLanguage();
  return <>{t(textKey)}</>;
}

export function LocalizedProjectField({
  project,
  field
}: {
  project: Project;
  field: keyof Project;
}) {
  const { localizeProject } = useLanguage();
  const value = localizeProject(project)[field];

  return <>{typeof value === "string" ? value : ""}</>;
}

export function LocalizedProjectServices({ project }: { project: Project }) {
  const { localizeProject } = useLanguage();

  return (
    <>
      {localizeProject(project).services.map((service) => (
        <li key={service}>{service}</li>
      ))}
    </>
  );
}

export function LanguageSwitcher({
  inverse = false
}: {
  inverse?: boolean;
}) {
  const { language, setLanguage } = useLanguage();
  const options: Array<{ value: Language; label: string }> = [
    { value: "en", label: "EN" },
    { value: "zh", label: "中文" },
    { value: "ja", label: "日本語" }
  ];

  return (
    <div
      className={`inline-flex items-center gap-2 whitespace-nowrap text-[10px] font-semibold tracking-[0.08em] ${
        inverse ? "text-white/55" : "text-ink/45"
      }`}
      aria-label="Language"
    >
      {options.map((option, index) => (
        <span key={option.value} className="inline-flex items-center gap-2">
          {index > 0 ? <span aria-hidden="true">/</span> : null}
          <button
            type="button"
            onClick={() => setLanguage(option.value)}
            className={`transition ${
              language === option.value
                ? inverse
                  ? "text-white"
                  : "text-titleBlue"
                : inverse
                  ? "hover:text-white"
                  : "hover:text-titleBlue"
            }`}
            aria-pressed={language === option.value}
          >
            {option.label}
          </button>
        </span>
      ))}
    </div>
  );
}
