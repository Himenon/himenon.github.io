from setuptools import setup
setup(
    name='code-highlight',
    version='1.0',
    py_modules=['code_highlight'],
    entry_points={
        'markdown.extensions': [
            'code_highlight = code_highlight:CodeHighlightExtension',
        ],
    }
)
