from markdown import Markdown
import logging

logger = logging.getLogger(name=__name__)

LOG_LEVEL = logging.INFO

md: Markdown = Markdown(extensions=['code_highlight'])

def test_hello_redis(caplog):
    caplog.set_level(LOG_LEVEL)
    with open('test_data/syntax.md') as stream:
        mkd = stream.read()
    logger.debug(md.convert(mkd))
    logger.info("ほげ")
    assert "world" == "worald"
,