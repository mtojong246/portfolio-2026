

export default function AIReportingTool() {
    return (
        <>
            <div className="case-study-component">
                <p>
                    {`This tool was built to eliminate the time-consuming manual process of \
                    compiling regulatory reports and scientific figure captions from raw laboratory \
                    data packets. Using a combination of large language models and retrieval-augmented \
                    generation, the tool ingests unstructured text, image, and tabular data from \
                    user-uploaded PDFs and DOCX files and transforms them into polished, professional-grade \
                    documents in minutes — a process that normally takes several hours or even days to complete.`}
                </p>
                <h2 className="text-[24px] font-semibold">The problem</h2>
                <p>
                    {`The client is responsible for writing FDA-standard regulatory reports for each study \
                    they conduct, where each report references protocol documents, scientific figures, and \
                    raw experimental data compiled into large data packets. These packets contain a mixture \
                    of text, image, and tabular data, follow no standardized format, and can run hundreds of \
                    pages long — and a single report may reference multiple of them.`}
                    <br/>
                    <br/>
                    {`Compounding the challenge, each report can include hundreds of scientific figures that \
                    must each be manually cropped from a PDF, accompanied by a written caption, and indexed in \
                    a Word document. With the majority of report sections being template-based and the overall \
                    process being as repetitive and labor-intensive as it was, the client wanted to explore how \
                    large language models could be leveraged to automate and streamline report writing while \
                    reducing the consistency and formatting errors that inevitably crept in during manual \
                    production.`}
                </p>
                <h2>The goal</h2>
                <p>
                    {`Design and develop a web application that could ingest, read, and interpret data from \
                    user-uploaded PDF and DOCX files and leverage LLMs to generate text and table content for \
                    each section of the final regulatory report in a manner consistent with the client's established \
                    writing style. The application also needed to provide a text editor interface where users could \
                    modify LLM-generated output, organize and reorder scientific figures with automatic caption reindexing, \
                    and export the final report as a DOCX file.`}
                </p>
                <h2>My role</h2>
                <p>
                    {`I was the sole designer and primary developer on this project, responsible for the full product \
                    lifecycle from concept through deployment. I handled UX design in Figma, frontend development of \
                    the text editor interface in React, and LLM pipeline orchestration, RAG, and prompt engineering \
                    with LangChain and AWS Bedrock. I also owned backend data flow architecture and schema design, \
                    and met with the client on a monthly basis to present new ideas, provide progress updates, and \
                    incorporate feedback.`}
                </p>
                <h2>Process & Approach</h2>
                <h3>Discovery & Planning</h3>
                <p>
                    {`I began by meeting with stakeholders to understand their core pain points \
                    and familiarize myself with their existing report writing workflow. Through \
                    these conversations and a thorough review of report examples provided by the client, \
                    I mapped out the structure of their regulatory documents — identifying which values \
                    appeared in each section, which source documents those values came from, and where \
                    within those documents they could be found. This exercise also helped me determine \
                    which sections of the report were well-suited for template-based generation, which \
                    required heavier LLM involvement for data interpretation and conclusions, and which \
                    portions genuinely required human input and judgment.`}
                    <br/>
                    <br/>
                    {`Three pain points emerged as the most critical to address: the time spent manually \
                    reading through hundreds of pages to retrieve specific values; the indexing errors that \
                    resulted from manually reordering figures and updating references in Word; and the \
                    tedious process of converting scientific figures from PDF pages to PNGs, cropping \
                    whitespace, and inserting each one into the document alongside a written caption.`}
                </p>
                <h3 className="mt-6">Design & Implementation</h3>
                <p>
                    {`With the core pain points clearly defined, I designed the application's main features \
                    around directly solving each one: LLM-driven report and caption generation with RAG for \
                    querying uploaded documents, automatic figure reindexing when figures are reordered, \
                    automatic page break insertion between figures and their captions, variable creation for \
                    quick inline edits, and DOCX export.`}
                    <br/>
                    <br/>
                    {`For the UI, I designed a text editor-centered interface that would display generated \
                    content in a manner similar to how it would appear in Word, allowing users to interact \
                    directly with the output. I chose Tiptap as the text editor library for its out-of-the-box \
                    components and the lower-level customization it exposes through its ProseMirror foundation. \
                    Supporting the core editor, I designed a document creation modal with tabbed steps that \
                    guided users through uploading files and entering any information requiring manual input, \
                    with automatic document categorization based on standardized titles to support quick bulk \
                    uploads. A drag-and-drop figure reordering modal built with React DnD Kit allowed users to \
                    reorganize figures into sections visually, while a side navigation bar provided quick access \
                    to all documents, uploaded files, and user-created variables. A toolbar handled in-document \
                    editing and quick access to common operations like page break insertion.`}
                    <br/>
                    <br/>
                    {`On the backend, raw documents, library files, and vector stores were housed in S3 and MinIO \
                    object storage, with metadata stored in a PostgreSQL database. The data ingestion pipeline used \
                    PyMuPDF for PDFs and python-docx for Word documents, embedding content with AWS embedding models \
                    and storing vectors in a FAISS vector store. The LLM pipeline was orchestrated with LangGraph to \
                    support a custom workflow through each section of the report, using AWS chat models for content \
                    generation. Python-docx handled the transposition of text editor content into the final Word \
                    document for export, and Airflow managed task execution order and parallelization.`}
                </p>
                <h3 className="mt-6">Challenges & How I Solved Them</h3>
                <h4>Resizing figure images to fit within a single page</h4>
                <p>
                    {`One of the trickiest frontend challenges was automatically resizing figure images so that each \
                    figure and its accompanying caption fit on a single page followed by a page break. Due to the \
                    nature of the text editor library, the amount of space a slice of content occupies on a given \
                    page cannot be calculated until after it has been rendered — which made automatic resizing \
                    particularly difficult given that page margins and caption lengths are both variable. \
                    To solve this, I wrote a reusable asynchronous function that first inserts all text nodes — \
                    section headings, captions, and spacer paragraphs — then waits for the editor state to update \
                    before locating the target page. It then calculates the remaining space on the page by subtracting \
                    the cumulative height of all text nodes from the total body height, sets the image node height \
                    equal to that remaining space with a slight vertical offset to prevent overflow, and finally \
                    inserts the image node above the caption. This same function was used both during initial content \
                    insertion and when maintaining formatting requirements after figures were reordered.`}
                </p>
                <h4>Extracting and interpreting complex tables</h4>
                <p>
                    {`Each data packet is a large PDF compiled from various sources and typically contains a significant \
                    number of tables with varying levels of structural complexity — many of which couldn't be cleanly \
                    extracted with PyMuPDF alone. This posed a meaningful challenge since LLMs work best with tabular \
                    data that has been serialized effectively or converted to clean markdown, and poorly extracted tables \
                    lead directly to inaccurate outputs.`}
                    <br/>
                    <br/>
                    {`To address this, I employed several complementary strategies. For tables in sections of the data \
                    packet that I knew were critical to the report, I used the Camelot library to extract tables — first \
                    with lattice mode, then with stream mode via a function that dynamically swept through combinations \
                    of x, y, and edge tolerance parameters to account for variations in table borders and layout complexity. \
                    Since RAG retrieval of tables works best when they're accompanied by descriptive context, and since \
                    only a subset of tables in each packet were actually needed, I implemented a hybrid RAG system combining \
                    semantic search with BM25 keyword search to ensure the correct tables were consistently being retrieved.`}
                    <br/>
                    <br/>
                    {`Even after tables were well-extracted and cleaned with pandas, certain report sections that required the \
                    LLM to read, interpret, and then write about tabular data still produced occasional inaccuracies. I resolved \
                    this by splitting these scenarios into two focused prompts: one responsible for reading the table and \
                    generating discussion points, and another for consolidating those points into coherent paragraphs. Giving \
                    the model a single, well-defined task at a time significantly reduced hallucinations and made debugging \
                    considerably more straightforward.`}
                </p>
                <h2>Lessons Learned</h2>
                <p>
                    {`This project was my deepest and most formative experience working with LLMs in a production context, \
                    and it challenged assumptions I didn't even know I was making going in. My biggest early mistake was \
                    treating the LLM as a universal solution — initially routing nearly every task through the model under \
                    the assumption that it would handle things more reliably than programmatic approaches. In practice, the \
                    opposite was often true. I quickly learned that LLMs and traditional programming are complementary tools, \
                    not interchangeable ones, and that part of the craft of building AI-powered applications is developing the \
                    judgment to know which problems belong to which approach.`}
                    <br/>
                    <br/>
                    {`Working with real-world documents also humbled me in ways I didn't anticipate. The variety and \
                    inconsistency of the source data — unstructured PDFs, complex multi-format tables, documents compiled from \
                    disparate sources — meant that assumptions that held for one data packet would break for another. This taught \
                    me to build more defensively, test against edge cases early, and resist the urge to declare something "solved" \
                    before it had been stress-tested against the messiness of real inputs.`}
                    <br/>
                    <br/>
                    {`Perhaps the most transferable lesson was around task decomposition. When the LLM struggled with a complex, \
                    multi-step operation, the solution was almost always to break it into smaller, more focused prompts with clearly \
                    defined outputs. Not only did this reduce hallucinations, it made the system significantly easier to debug, \
                    iterate on, and explain to stakeholders. That principle — that clarity of purpose at each step produces better \
                    outcomes than trying to do everything at once — is something I now bring into how I approach complex problems well \
                    beyond the scope of LLM engineering.`}
                </p>
            </div>
        </>
    )
}