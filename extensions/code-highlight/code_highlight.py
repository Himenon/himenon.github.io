from markdown.extensions import Extension
import logging

logger = logging.getLogger(name=__name__)

class CodeHighlightExtension(Extension):
    def __init__(self, *args, **kwargs):
        logger.info("読み込まれたかも")
        super(CodeHighlightExtension, self).__init__(*args, **kwargs)

    def extendMarkdown(self, md, md_globals):
        pass

def makeExtension(*args, **kwargs):
    return CodeHighlightExtension(*args, **kwargs)
