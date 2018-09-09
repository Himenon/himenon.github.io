from markdown.extensions import Extension


class CodeHighlightExtension(Extension):
    def __init__(self, *args, **kwargs):
        super(CodeHighlightExtension, self).__init__(*args, **kwargs)

    def extendMarkdown(self, md, md_globals):
        pass

def makeExtension(*args, **kwargs):
    return CodeHighlightExtension(*args, **kwargs)
